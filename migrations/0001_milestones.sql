-- Milestone Guardian, hackathon night 1, 27 Oct 2026.
-- Milestone schema only. No projection, timeline, what-if, or drift tables yet.
CREATE TABLE IF NOT EXISTS milestones (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  target_amount INTEGER NOT NULL,
  target_date TEXT NOT NULL,
  current_amount INTEGER NOT NULL DEFAULT 0,
  household_phase TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS milestone_links (
  id TEXT PRIMARY KEY,
  from_milestone_id TEXT NOT NULL REFERENCES milestones(id),
  to_milestone_id TEXT NOT NULL REFERENCES milestones(id),
  link_type TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_milestone_links_from ON milestone_links(from_milestone_id);
CREATE INDEX IF NOT EXISTS idx_milestone_links_to ON milestone_links(to_milestone_id);
