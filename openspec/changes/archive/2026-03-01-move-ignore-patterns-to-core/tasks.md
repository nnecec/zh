## 1. Core Package - Parse ignorePatterns

- [x] 1.1 Add `IgnorePatternsOptions` interface to core package
- [x] 1.2 Move `parseIgnorePatterns` function from prettier-plugin-zh to core/utils
- [x] 1.3 Export `parseIgnorePatterns` from core package

## 2. Core Package - Apply ignorePatterns to all rules

- [x] 2.1 Update `noDuplicatePunctuation` to accept and check ignorePatterns
- [x] 2.2 Update `noSpaceAroundFullwidth` to accept and check ignorePatterns
- [x] 2.3 Update `noSpaceBetweenNumberUnit` to accept and check ignorePatterns
- [x] 2.4 Update existing `spaceAroundAlphabet` and `spaceAroundNumber` to check full text match
- [x] 2.5 Add tests for ignorePatterns in core rules

## 3. Prettier Plugin - Use core ignorePatterns

- [x] 3.1 Keep `zhIgnorePatterns` option in prettier-plugin-zh (do not rename)
- [x] 3.2 Import and use core's `parseIgnorePatterns` and rules with ignorePatterns support
- [x] 3.3 Update transform-markdown.ts to pass parsed ignorePatterns to core rules
- [x] 3.4 Update types.ts to use core types for ignorePatterns
- [x] 3.5 Add tests for ignorePatterns in prettier-plugin-zh

## 4. Documentation and Cleanup

- [x] 4.1 Update prettier-plugin-zh readme with ignorePatterns documentation
- [x] 4.2 Remove duplicate `parseIgnorePatterns` from prettier-plugin-zh (use core's instead)
- [x] 4.3 Run build and tests to verify changes
