AI Agent Rules for Homework Grader Prototype
1. Homework Setup Rules
R1.1: The agent must allow instructors to define a homework assignment including title, description, due date, and grading criteria.

R1.2: Grading rubrics must be structured and saved, supporting multiple evaluation categories (e.g., correctness, clarity, completeness).

R1.3: Instructors can upload reference solutions for the AI to use during automated evaluation.

2. Submission Intake Rules
R2.1: Accept student homework submissions via file upload or code editor (React form).

R2.2: Each submission must be timestamped and associated with a student ID or email.

R2.3: Late submissions are automatically flagged and can have penalties applied.

3. Grading Logic Rules
R3.1: The AI must compare student submissions with the reference solution and rubric using natural language/text/code similarity metrics.

R3.2: Partial grading must be supported if only some rubric criteria are met.

R3.3: Instructor overrides are allowed; AI suggestions are not final unless confirmed.

4. Feedback Generation Rules
R4.1: For each submission, the agent must generate detailed feedback for each rubric criterion.

R4.2: Highlight errors or missing parts with comments and improvement suggestions.

R4.3: Positive reinforcement should be given for well-done sections.

5. Results and Analytics Rules
R5.1: Provide summary analytics like average score, max/min, standard deviation.

R5.2: Support filtering results by performance bands (e.g., A/B/C/F).

R5.3: Visual analytics (e.g., bar charts) must be accessible in the interface.

6. User Interface & Usability Rules
R6.1: The interface must follow usability heuristics like visibility of system status, user control, error prevention, and help/documentation.

R6.2: Interface must be accessible and responsive on desktop and mobile.

R6.3: A test mode must be present to simulate submissions for debugging and user training.

7. Testing & Quality Assurance Rules
R7.1: Unit tests (Jest) must cover at least 80% of the grading logic functions.

R7.2: End-to-end tests (Selenium) must verify submission intake, grading flow, and feedback generation.

R7.3: The AI agent should handle invalid or malicious inputs gracefully.

8. Deployment Rules
R8.1: The site must be hosted publicly and accessible via URL (per submission guidelines).

R8.2: A backup local version should be kept to ensure demo readiness.