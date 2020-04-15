<p align='center'><a href="http://pigxw.top/wx-ui/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://i.loli.net/2020/04/14/L1dKY6jaq5zhNRP.png" alt="Wx-ui logo"></a></p>

<p align='center'>
   <a href="https://travis-ci.com/WUXIAOd/wx-ui.svg?branch=master"><img src="https://travis-ci.com/WUXIAOd/wx-ui.svg?branch=master" alt="Build Status"></a>
   <a href="https://www.npmjs.com/package/wuxiaod-1109"><img src="https://img.shields.io/npm/v/wuxiaod-1109" alt="Version"></a>
   <a href="https://www.npmjs.com/package/wuxiaod-1109"><img src="https://img.shields.io/npm/l/wuxiaod-1109" alt="License"></a>
</p>


<h2 align='center'> WX-UI 这是一个 Vue UI 组件</h2>

## 介绍

这是我在学习 Vue 的过程中做的一个 UI 框架，不足之处还请见谅。

## 开始使用

1. 添加 CSS 样式

   使用本框架前，请在 CSS 中开启 border-box
   
    ```
    *,*::before,*::after {box-sizing: border-box;}
    ```
    
    IE 8 及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    
    ```
    /* IE 15 及以上支持 */
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;--color: #333;
        --border-color: #999;--border-color-hover: #666;
    }
    ```
  
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
#### API
Button Attributes
| 属性 | 说明 | 类型 | 参数 | 默认值 |
| ---- | ---- | ---- | ---- | ----  |
| iconPosition | 内置icon的位置 | String | - | left |
| loading | 是否有加载中标志 | Boolean | - | false |

Collapse Attributes
| 属性 | 说明 | 类型 | 参数 | 默认值 |
| ---- | ---- | ---- | ---- | ----  |
| single | 是否只展开一个面板 | Boolean | - | false |
| selected | 选中与否的数量 | Array | - | - |

## 提问

## 变更记录

## 联系方式

Eamil:xiaopig0106@gmail.com

## 贡献代码

