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

フォームで入力される `firstName`, `lastName` から `fullName` を取得したい場合、useEffect のなかで setState しなくても動作するという例です。

### Caching expensive calculations

[Updating state based on props or state](#updating-state-based-on-props-or-state) と同じ内容。
たとえば検索ボックスで対象のリストをフィルターした場合にも setState は不要という内容です。

### Resetting all state when a prop changes

prop の値が変更されたときに、状態をリセットするための方法について紹介されています。
例として、プロフィールページのように id でコンポーネントに表示する内容を切り替える場合、切り替えた後にページ内の状態をリセットしたい場合があります。
（対象のユーザーに対して残したコメントは、他のユーザーの時は表示したくない、など）

このような場合において useEffect を使わなくてもスマートに実現する方法があります。

### Adjusting some state when a prop changes

props の値が変更されたときに、状態を"調整"するための方法について紹介されています。
たとえばリストのデータに対して検索、ソートなどの変更を加える際に大元のデータが変更されるとどのように"調整する"のが適切か、といった手法に関して記載されています。

better パターンでは、useEffect ではなく、useState (usePrevious) を用いて、レンダリングの中で前の状態との比較をしています。
best パターンは、useState すら使わずにレンダリングのかですべての計算を行っています。

### Sharing logic between event handlers

複数のイベントハンドラーの結果を共通化したい場合にも useEffect ではなく、function を使いべきであるという事例が紹介されています。

### Sending a POST request

ここでは二種類の POST リクエストについて紹介されています。
ひとつはコンポーネントがマウントされた時の分析情報の送信 POST、そしてもうひとつは submit ボタンを押した時の　 POST リクエストです。
前者は useEffect のユースケースとしては適切です。一方、後者は避けるべきケースだと紹介されています。

### Chains of computations

### Initializing the application

### Notifying parent components about state changes

### Passing data to the parent

### Subscribing to an external store

### Fetching data

## 参考

You Might Not Need an Effect
https://beta.reactjs.org/learn/you-might-not-need-an-effect

Goodbye, useEffect, David Khourshid @ ReactNext 22
https://www.youtube.com/watch?v=RW9TVhmxu6Q
