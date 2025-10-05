import { sql } from "drizzle-orm";

export function localeSearch<T>({
  column,
  search,
}: {
  column: T;
  search?: string;
}) {
  return search ? sql`${column} ->>'en' ilike ${`%${search}%`}` : undefined;
}
