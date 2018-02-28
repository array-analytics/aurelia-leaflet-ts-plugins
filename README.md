# Aurelia-Leaflet-TS Plugins
Plugins for aurelia-leaflet component.
Based on https://github.com/Vheissu/aurelia-typescript-plugin/commit/43e863ebcd84941bb7be4894e476609f554c8f6e.

## Supported
- [x] Multiple module formats: commonjs, es2015, system and amd.
- [x] Write plugins in TypeScript
- [x] Definition files automatically generated using the TypeScript native compiler
- [x] Implement testing
- [x] Implement better linting
- [x] Better definition generation and singular index.js export strategy

## Todo
- [ ] Implement support for Wallaby.js
- [ ] Implement code coverage

## Structure
- `src` this is where your `.ts` files go. They get compiled into the respective `dist` folders for each module type.
- `dist` automatically transpiled/generated modules go in here, don't edit anything here.
- `styles` the root styles directory is where your styles go. These are then put into the `dist` folder so your modules can include/reference any styles.

## Webpack Support
If you want your module to work appropriately with Aurelia and Webpack, ensure you define in your `package.json` an Aurelia build resources map so the compiler knows where each file lives. This makes it easier for the end user consuming your package to use it without issue.

## Aurelia CLI Support
This plugin skeleton exports an AMD module format which the Aurelia CLI currently consumes.

```
"dependencies": [
  {
    "name": "aurelia-leaflet-ts-plugins",
    "path": "../node_modules/aurelia-leaflet-ts-plugins/dist/amd",
    "main": "index",
    "resources": [
              "**/*.html",
              "**/*.css"
            ]
  }
]
```

## To Consume
In main.ts of consuming project, add `aurelia.use.plugin("aurelia-leaflet-ts-plugins")`.

## To Build/Develop
1. Clone out to local dir.
2. CD into directory root
3. Execute `npm link`.
4. CD into project that will consume plugin.
5. Execute `npm link "sample-showtext-typescript-plugin"`. Add package to package.json using file: to plugin dist AMD directory.
6. Execute `npm install`. 
7. Make changes in plugin source.
8. Execute `npm run build` after changes in plugin project. Your changes will immediatelly be reflected at consuming project's ./node_modules/sample-showtext-typescript-plugin.


