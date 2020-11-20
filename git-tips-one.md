### Git: General commands

1. -- pull vs fetch vs merge:

Git Pull: will perform a fetch additionally merge changes into your local branch  
(``` git pull = git fetch + git merge ```)

Git Fetch: download any changes to local except for local branch (local branch stay unchanged)

Git Rebase: rewrite the changes of one branch onto another without creating a new commit

Git Merge: merge changes from remote to local


2. -- git pull vs git pull rebase:

`git pull = git fetch + git merge`

`git pull --rebase = git fetch + git rebase`
<!-- this is something to recall quickly: https://github.com/twtrubiks/Git-Tutorials -->

Common usage: git pull --rebase, providing more cleaner and won't impose a `logical grouping` on your commits

Simple word: `git push --rebase` made `code reviewer` life much easier to review the commits

*** after git rebase, if we have conflicts, we normally `git add .` + `git rebase --continue` + `git push` ***


3. -- git push commands:

``` js
-u: `-u` means `--set-upstream`, eg: `git push -u origin master`
```
git push origin HEAD: A handy way to push the current branch to the same name on the remote.

git push origin HEAD:master: Push the current branch to the remote ref matching master in the origin repository. This form is convenient to push the current branch without thinking about its local name.


4. -- How to combine old commits into 1 commit before merge (Squash):

``` js
`git reset --soft the-commit-hash-before-the-first-commit-for-this-branch`
```
Then, do ``` git push -f ``` to update code for that branch


5. -- `git push --force-with-lease`:

it helps developers to double check whether someone has already push something, (try to avoid overwrite other developer's code)


6. -- `git cherry-pick`:

Branch A has 3 commit, Branch B has 6 commits, and we only need Branch B second commit and put into Branch A, this is story case, we can use `cherry-pick` command in `Branch A`. After the cherry-pick, the commit which get cherry picked will be set as the `topest/latest` commit for Branch A.

If we cherry pick multiple files (this is the command): `git cherry-pick #hash-1 #hash-2`
If we have conflicts during cherry pick, so we `first` resolve the conflicts and then use `git cherry-pick --continue`


7. -- git revert vs git reset:

*** danger level: checkout -> revert -> reset ***

git revert: delete the `specific` commit from commit chains, just don't want this specific commit
git reset: reset to a specific spot of previous commit, it deletes a range of commits

#commit-1 -> #commit-2 -> #commit-3 -> #commit-4

- For git revert, we can revert #commit-3, so #commit-3 will be `deleted` and behaves as `never added before`, and it will add a new `REVERT-hash-commit` as latest commit instead of delete the commit which needs to be reverted !!!! Again, if we want to chnage back, we can revert the `REVERT-hash-commit`, so we changed back !!

- For git reset, we can reset #commit-2 as `HEAD`, so, #commit-3 and #commit-4 are removed forever  

[<a href="https://www.youtube.com/watch?v=RIYrfkZjWmA&ab_channel=TheNetNinja" target="_blank">Reference</a>]


8. -- git logs:

- `git reflog`
- `git log --oneline`
- `git log`
- `git diff`
- `git show #hash-commit`



*** -- Reference: <a href="https://git-scm.com/docs" target="_blank">https://git-scm.com/docs</a> ***
