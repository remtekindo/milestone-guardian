import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Milestone schema only — built 27 Oct 2026, hackathon night 1.
 * Amounts are integers in minor units. No projection, no narrative,
 * no timeline UI, no what-if, and no drift logic lives in this file.
 * Those are later nights and must not be added here by accident.
 */
export const milestones = sqliteTable("milestones", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  // Integer, minor units. Never a float, never computed by a language model.
  target_amount: integer("target_amount").notNull(),
  // ISO date string, YYYY-MM-DD.
  target_date: text("target_date").notNull(),
  // Integer, minor units. Starts at zero for a new milestone.
  current_amount: integer("current_amount").notNull().default(0),
  // Household phase: single | couple | family
  household_phase: text("household_phase").notNull(),
  // Status: active | completed | archived
  status: text("status").notNull().default("active"),
});

export const milestone_links = sqliteTable("milestone_links", {
  id: text("id").primaryKey(),
  // The milestone that, when shifted, affects the other milestone.
  from_milestone_id: text("from_milestone_id")
    .notNull()
    .references(() => milestones.id),
  // The milestone affected by the shift (what-if cascade, later night).
  to_milestone_id: text("to_milestone_id")
    .notNull()
    .references(() => milestones.id),
  // Link type, for example: shifts | depends_on
  link_type: text("link_type").notNull(),
});
