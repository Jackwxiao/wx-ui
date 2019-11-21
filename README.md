# Wheels - 这是一个 Vue UI 组件

[![Build Status](https://travis-ci.org/WUXIAOd/gulu-1.svg?branch=master)](https://travis-ci.org/WUXIAOd/gulu-1)

## 介绍

这是我在学习 Vue 的过程中做的一个 UI 框架，不足之处还请见谅。

## 开始使用

1. 添加 CSS 样式
   使用本框架前，请在 CSS 中开启 border-box
    ```
    *,*::before,*::after {box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;--color: #333;
        --border-color: #999;--border-color-hover: #666;
    }
    ```
    IE 8 及以上浏览器都支持此样式

2. 安装 
    ```
    npm install --save wuxiaod-1109
    ```
3. 引入 
    ```
        import {Button, ButtonGroup, Icon} from 'wuxiaod-1109'
        import 'wuxiaod-1109/dist/index.css'
    
        export default {
            name:  'app',
            components: {
                'g-button': Button,
                'g-icon': Icon
            }
        }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

Eamil:xiaopig0106@gmail.com

## 贡献代码

