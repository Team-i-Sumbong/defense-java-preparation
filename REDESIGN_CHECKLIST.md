# Course Redesign Checklist

## Goal
- [ ] Reduce information overload across all pages
- [ ] Keep content beginner-friendly for first-time Java developers
- [ ] Make each page easier to scan, finish, and remember
- [ ] Align explanations with how college students present during defense

## Teaching Rules
- [ ] Keep one main teaching idea per visible card
- [ ] Use the pattern: `Key Idea -> Project Example -> Defense Line`
- [ ] Rewrite long paragraphs into short paragraphs or bullets
- [ ] Remove repeated explanations unless they add new value
- [ ] Start answers from principle first, class name second
- [ ] Use plain academic language, not overly technical jargon
- [ ] Keep support notes hidden until needed with collapsible sections

## Global UI Changes
- [ ] Simplify all sticky sidebars so they focus on navigation first
- [ ] Remove or relocate secondary sidebar blocks that add clutter
- [ ] Reduce the number of equal-weight cards shown at once
- [ ] Improve spacing so modules feel separated and easier to process
- [ ] Make visual hierarchy clearer between titles, core content, and support notes
- [ ] Ensure long labels and content wrap cleanly without clipping
- [ ] Keep desktop and mobile layouts readable without dense stacking

## `index.html` Course Page
- [ ] Reduce the visible modules to the most important defense topics
- [ ] Merge overlapping concepts where possible
- [ ] Refactor each module into:
- [ ] `Key Idea`
- [ ] `Project Example`
- [ ] `Defense Line`
- [ ] Move reminders and critique notes into expandable sections
- [ ] Keep only one short “Professor’s Reminder” block in a stronger location
- [ ] Shorten the first screen so students immediately understand what to do next
- [ ] Keep practice prompts, but reduce their visible weight until selected
- [ ] Keep the system flow section interactive but simpler

## `styles.css`
- [ ] Update layout styles to support lower-density modules
- [ ] Add styles for collapsible support sections
- [ ] Tune spacing between sections and cards
- [ ] Ensure sidebar behavior stays stable on desktop and mobile
- [ ] Support clearer wrapping for nav labels and tags
- [ ] Reduce “wall of cards” feeling with better grouping and pacing

## `script.js`
- [ ] Keep only interactions that help learning
- [ ] Remove or simplify interactions that create noise
- [ ] Preserve progress tracking
- [ ] Keep defense prompt answers short and memorable
- [ ] Keep flow interaction focused on tracing one clear path at a time

## `java-review.html`
- [ ] Trim Java review topics to only what supports the defense
- [ ] Prioritize:
- [ ] Variables and data types
- [ ] Conditionals and control flow
- [ ] Classes and objects
- [ ] Methods and parameters
- [ ] Encapsulation
- [ ] One clear inheritance example if relevant
- [ ] Reduce less relevant theory that does not appear clearly in the project
- [ ] Connect every Java concept to an i-Sumbong example
- [ ] Replace long explanations with short teaching blocks
- [ ] Keep quote or motivation content lightweight

## `java-review.css`
- [ ] Match the simplified visual pacing of the course page
- [ ] Keep review cards readable and not textbook-like
- [ ] Support tab or toggle sections if used
- [ ] Keep layout consistent with the rest of the site

## `java-review.js`
- [ ] Keep only helpful review interactions
- [ ] Make topic switching concise and focused
- [ ] Ensure any rotating quotes or extra features do not distract from study content
- [ ] Keep displayed explanations short and beginner-friendly

## `quiz.html`
- [ ] Reduce each quiz set from 15 questions to 7 questions
- [ ] Keep the quiz page visually lighter and easier to finish
- [ ] Clarify that quizzes are short by design
- [ ] Emphasize completion and review over sheer quantity
- [ ] Keep difficulty selection simple
- [ ] Keep result feedback visible and actionable

## `quiz.css`
- [ ] Reduce visual heaviness in question cards
- [ ] Improve spacing and pacing between questions
- [ ] Make selected, correct, and wrong states obvious but not noisy
- [ ] Keep the summary area compact and helpful

## `quiz.js`
- [ ] Curate each difficulty down to 7 strong questions
- [ ] Remove weaker or repetitive questions
- [ ] Keep question coverage aligned to learning goals
- [ ] Suggested structure:
- [ ] `Easy`: vocabulary, roles, and basic concepts
- [ ] `Medium`: responsibilities, flow, and explanation quality
- [ ] `Hard`: critique, tradeoffs, and defense reasoning
- [ ] Update scoring and result text to match 7-question sets
- [ ] Keep feedback instructional, not just corrective

## Content Quality Review
- [ ] Check for repeated ideas across pages
- [ ] Check for paragraphs that feel too long on desktop
- [ ] Check whether a beginner can identify what to read first
- [ ] Check whether every module ends with a usable defense takeaway
- [ ] Check whether examples stay tied to real project classes
- [ ] Check for awkward wording, broken characters, or inconsistent tone

## Final QA
- [ ] Review `index.html`, `java-review.html`, and `quiz.html` in desktop view
- [ ] Review all three pages in mobile view
- [ ] Confirm the sidebar never hides important content
- [ ] Confirm collapsible sections open and close cleanly
- [ ] Confirm progress, prompt, and quiz interactions still work
- [ ] Confirm all navigation links still work
- [ ] Confirm the shorter quizzes feel complete and not rushed

## Recommended Implementation Order
- [ ] 1. Refactor `index.html`
- [ ] 2. Update `styles.css` and `script.js`
- [ ] 3. Refactor `java-review.html`
- [ ] 4. Update `java-review.css` and `java-review.js`
- [ ] 5. Refactor `quiz.html`
- [ ] 6. Update `quiz.css` and `quiz.js`
- [ ] 7. Run full content and UI QA pass

## Success Criteria
- [ ] A first-year student can scan each page and understand what to do next
- [ ] Each module feels teachable in under 2 minutes
- [ ] The quiz feels finishable in one short sitting
- [ ] The course supports understanding, not memorization
- [ ] The UI looks calmer, clearer, and more intentional
