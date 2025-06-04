ALTER TABLE "books" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "borrow_records" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "books" CASCADE;--> statement-breakpoint
DROP TABLE "borrow_records" CASCADE;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_activity_date" SET NOT NULL;