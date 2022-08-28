# You Might Not Need an Effect

## はじめに

## You Might Not Need an Effect とは

React Docs (BETA) の[公式](https://beta.reactjs.org/)で紹介されている useEffect を利用しなくても（利用しない方が）良いパターンです。
正しい使い方を理解して活用することにより、 React の実装はより堅牢かつ健全な形に近づいていきます。

## useEffect とは

## useEffect が不要なパターン

- レンダリングでデータを変更する場合
- ユーザーイベントをハンドルする場合

上記のコモンケースでは Effects は不要です。

Effects は外部のシステムとデータを同期させる場合に必要とされます。
ただしこのパターンに関して、David Khourshid は react-query を使うことで useEffect を不要にできると語っています。

以下では、各パターンに関して実際のコードを使って見ていきます。

### Updating state based on props or state

## 参考

You Might Not Need an Effect
https://beta.reactjs.org/learn/you-might-not-need-an-effect

Goodbye, useEffect, David Khourshid @ ReactNext 22
https://www.youtube.com/watch?v=RW9TVhmxu6Q
