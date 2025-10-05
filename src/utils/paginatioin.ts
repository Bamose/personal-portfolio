/* eslint-disable @typescript-eslint/no-explicit-any */

import { count, desc } from "drizzle-orm";
import { PAGE_SIZE } from "@/constants/pagination";
import { db } from "@/db/index";
import logger from "@/utility/logger";
import type { PagedResponse } from "@/utility/pagination.type";

export async function pagedEntity<T>({
  table,
  where,
  orderBy,
  page = 1,
  pageSize = PAGE_SIZE,
}: {
  table: any;
  where?: any;
  orderBy?: any;
  page?: number;
  pageSize?: number;
}): Promise<PagedResponse<T>> {
  try {
    return await db.transaction(async (tx) => {
      const data = tx
        .select()
        .from(table)
        .where(where)
        .orderBy(orderBy ?? (table?.createdAt && desc(table.createdAt)))
        .limit(pageSize)
        .offset(page ? (page - 1) * pageSize : 0);

      const total = tx.select({ value: count() }).from(table).where(where);

      const [d, [t]] = await Promise.all([data, total]);

      return { data: d as T[], total: t.value };
    });
  } catch (err) {
    logger.log(err);
    throw err;
  }
}
