### Git: General commands 

-- pull vs fetch vs merge:

Git Pull: will perform a fetch additionally merge changes into your local branch  
(``` git pull = git fetch + git merge ```)

Git Fetch: download any changes to local except for local branch (local branch stay unchanged)

Git Rebase: rewrite the changes of one branch onto another without creating a new commit

Git Merge: merge changes from remote to local
### Git general commands


Common usage: git pull --rebase, providing more cleaner and won't impose a logical grouping on your commits


-- git push commands:
``` js
-u: -u means --set-upstream, eg: git push -u origin master
```
git push origin HEAD: A handy way to push the current branch to the same name on the remote.

git push origin HEAD:master: Push the current branch to the remote ref matching master in the origin repository. This form is convenient to push the current branch without thinking about its local name.


-- How to combine old commits into 1 commit before merge (Squash):
``` js
git reset --soft the-commit-before-your-local-branch-first-commit
```
Then, do ``` git push -f ``` to update code for that branch


reference: <a href="https://git-scm.com/docs" target="_blank">https://git-scm.com/docs</a>

