# Pull Request Process Guide

This guide outlines the step-by-step process for submitting and managing pull requests in GitHub. Following this process will help ensure smooth collaboration and efficient code review within the development team.

**1. Move Task from "To-Do" to "In Progress" in JIRA:**

Before starting work on a task, move it from the "To-Do" column to the "In Progress" column in JIRA. This indicates that you have taken ownership of the task.

**2. Create a Draft Pull Request (PR) Early:**

As soon as you start working on a task, create a draft pull request in GitHub. This allows you to share your progress with the team and get early feedback.

**3. PR Template Checklist:**

Use the provided PR template, which includes a checklist of seven items. Delete any checklist items that are not relevant to your specific task.

**4. Keep Your Branch Up to Date:**

Ensure that your branch is up to date with the latest changes from the `next` branch. Regularly pull the latest changes and resolve any merge conflicts, if necessary.

**5. Pass Continuous Integration (CI) Checks:**

Before marking your PR as ready for review, make sure that all CI checks pass successfully. This includes running automated tests and ensuring code quality standards are met.

**6. Include Screenshots:**

When applicable, include screenshots or relevant visuals to provide better context and aid in the review process.

**7. Change from "Draft" to "Ready for Review":**

When you believe your code is ready for review, change the status of your PR from "Draft" to "Ready for Review" in GitHub.

**8. Tag Reviewers:**

Tag the appropriate reviewers, such as Darin and at least one additional person, for the code review. This ensures that the relevant team members are notified of the review request.

**9. Handle Requested Changes:**

Expect that reviewers may request changes to be made. If changes are requested, move the corresponding JIRA task to the "Iteration" column to indicate that additional work is needed.

**10. Prioritize Revisions:**

Address the requested changes before moving on to another task. It is important to complete all requested revisions promptly to keep the development process flowing smoothly.

**11. Re-Request Review:**

Once you have addressed the requested changes, mark your PR as ready for review again. Additionally, ping the reviewer in Slack as a gentle reminder to ensure they are aware of the updated PR.

**12. Final Checks before Merge:**

Ensure all reviewers have signed off on the PR, all tests are passing, and your branch is up to date with the latest changes from the `next` branch.

**13. Merge the PR:**

If all reviewers have approved the PR, tests are passing, and your branch is up to date, your PR is ready to be merged. Follow the established process to merge the PR into the main branch.

Remember, effective communication and collaboration are crucial throughout the pull request process. By following these guidelines, we can streamline our workflow and maintain code quality standards within our development team.

Note: This guide assumes familiarity with JIRA, GitHub, and Slack as the primary collaboration tools used by the development team.
