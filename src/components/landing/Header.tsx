"use client";

import { ActionIcon, TextInput } from "@mantine/core";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-300 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-[#d6001c]"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Habesha Bloom Logo"
            >
              <title>Habesha Bloom Logo</title>
              <path
                d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                fill="currentColor"
              />
            </svg>
            <h1 className="text-xl font-bold">Habesha Bloom</h1>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#d6001c] transition-colors"
            >
              New Arrivals
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#d6001c] transition-colors"
            >
              Clothing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#d6001c] transition-colors"
            >
              Accessories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-[#d6001c] transition-colors"
            >
              Sale
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <TextInput
              placeholder="Search"
              leftSection={
                <svg
                  fill="currentColor"
                  height="18px"
                  viewBox="0 0 256 256"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Search</title>
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              }
              classNames={{
                input: "h-10 w-40 lg:w-64 rounded-xl",
              }}
            />
          </div>
          <ActionIcon
            variant="subtle"
            size="lg"
            radius="lg"
            className="hover:bg-[#d6001c]/10 hover:text-[#d6001c]"
            aria-label="Wishlist"
          >
            <svg
              fill="currentColor"
              height="20px"
              viewBox="0 0 256 256"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Wishlist</title>
              <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
            </svg>
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="/cart"
            variant="subtle"
            size="lg"
            radius="lg"
            className="hover:bg-[#d6001c]/10 hover:text-[#d6001c]"
            aria-label="Shopping cart"
          >
            <svg
              fill="currentColor"
              height="20px"
              viewBox="0 0 256 256"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Shopping cart</title>
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" />
            </svg>
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size="lg"
            radius="lg"
            className="hover:bg-[#d6001c]/10 hover:text-[#d6001c]"
            aria-label="User account"
          >
            <svg
              fill="currentColor"
              height="20px"
              viewBox="0 0 256 256"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>User account</title>
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
            </svg>
          </ActionIcon>
        </div>
      </div>
    </header>
  );
}
