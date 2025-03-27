# Font Installation Instructions

This project requires two specific fonts:

1. GOBOLD HIGH THIN
2. Square721 Cn BT

Due to licensing restrictions, these fonts are not included in the repository. Please follow these steps to install them:

## GOBOLD HIGH THIN
1. Purchase and download GOBOLD HIGH THIN from a licensed font provider
2. Place the font file (GOBOLD_HIGH_THIN.otf) in this directory

## Square721 Cn BT
1. Purchase and download Square721 Cn BT from a licensed font provider
2. Place the font file (SQUARE721_CN_BT.ttf) in this directory

## Alternative Fonts
If you cannot obtain these specific fonts, you can modify src/index.css to use alternative fonts:

```css
@font-face {
  font-family: 'GOBOLD HIGH THIN';
  src: local('Arial Black'); /* Fallback font */
}

@font-face {
  font-family: 'Square721 Cn BT';
  src: local('Arial Narrow'); /* Fallback font */
}
``` 