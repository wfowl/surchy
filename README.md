# surchy

> Surchy is the dead simple text file searching app.

Surchy is built for the (admittedly specific) purpose of searching strings against any number of text files.

It's primary audience is for those who do not want or are unable to use tools like grep.

![mockup](https://github.com/wfowl/surchy/blob/implement_search/mockup.png?raw=true)

## Current Build Steps

```
npm install
npm run start
```

## TODO

- [x] change it so that newline characters by themselves do not trigger searches.
- [x] fix windows app icons
- [ ] can't right click in input fields
- [ ] Write to accommodate other encodings besides utf8
- [ ] fix the bug on windows where the process sticks around even after the app closes

## Notes

If you would like to build a windows executable using Mac you will need to install Wine first before running

```
npm run build-win
```
