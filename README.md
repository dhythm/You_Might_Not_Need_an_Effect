# You Might Not Need an Effect

## はじめに

## You Might Not Need an Effect とは

React Docs (BETA) の[公式](https://beta.reactjs.org/)で紹介されている useEffect を利用しなくても（利用しない方が）良いパターンです。
正しい使い方を理解して活用することにより、 React の実装はより堅牢かつ健全な形に近づいていきます。

## useEffect とは

React にはいくつかの built-in Hooks が存在する。
その中で、Basic Hooks のひとつであり、Class Component の lifecycle の代替としてもよく使われる Hooks です。
ただし、[David Khourshid の講演](https://www.youtube.com/watch?v=RW9TVhmxu6Q)では、"useEffect is not a lifecycle hook" と紹介されています。
この点に関して React team の Dan Abramov も Twitter にて、"The mental model is synchronization. Not lifecycle." という投稿を残しています。

同講演の中でも "What is useEffect() for?" という問いかけに対して、"Synchronization"（外部システムとの同期を取るためのもの）と語っています。
（React Docs (BETA) でもそのことは[記載](https://beta.reactjs.org/learn/synchronizing-with-effects)されている）

- Basic Hooks
  - useState
  - useEffect ← これ
  - useContext
- Additional Hooks
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - useDebugValue
  - useDeferredValue
  - useTransition
  - useId
- Library Hooks
  - useSyncExternalStore
  - useInsertionEffect

## useEffect が不要なパターン

- ユーザーイベントをハンドルする場合 (You don’t need Effects to handle user events.) useEffect -> eventHandler
- レンダリングでデータを変更する場合 (You don’t need Effects to transform data for rendering.) useEffect -> useMemo
- 親コンポーネントとやり取りをする場合 (You don't need useEffects for communicating with parents) useEffect -> eventHandler
- 外部のデータをサブスクライブする場合 (You don't need useEffects for subscribing to external stores) useEffect -> useSyncExternalStore
- アプリケーションを初期化する場合 (You don't need useEffect for initializing global singletons) useEffect -> justCallIt

上記のコモンケースでは Effects は不要です。

Effects は外部のシステムとデータを同期させる場合に必要とされます。 (You do need Effects to synchronize with external systems.)
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

Effects の結果を別の Effects で利用する（chain of Effects）はレンダリングが複数回起こるなど、問題を引き起こしやすいのでやめましょうという内容です。

ただし、イベントハンドラーの中で次の状態を計算できないようなケースでは chain of Effects が有効な場合もあります。
たとえば複数のドロップダウンのあるフォームで、選択内容によって次のドロップダウンが変わるパターンです。このようなケースは　 chain of Effects でデータをフェッチする方法が適切になります。
なぜなら"ネットワークと同期する目的"（＝ Effects を使うモチベーション）だからです。

### Initializing the application

アプリケーションがロードされた時に一度だけ実行したいロジックがあるケースについて紹介されています。

[How to handle the Effect firing twice in development?](https://beta.reactjs.org/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development) に記載があるように、開発環境では二度 mount されてしまい、デバッグが複雑になる可能性があります。（本番環境では remount は発生しない）
コンポーネントがマウントされた時に一度ではなく、アプリケーションがロードされた時に一度実行することを保証したいロジックは、実行済みかどうかのチェックをおこなう必要があります。

### Notifying parent components about state changes

このケースも、Effects ではなくイベントハンドラーを使うことを推奨しています。
さらに、今回のようなケースでは、状態を親コンポーネントに移譲することにより、子コンポーネントは UI コンポーネントとして振る舞うことが可能になります。

### Passing data to the parent

子コンポーネントでデータを取得しそれを親に渡すのであれば、React のデータフローとしては親コンポーネントで取得して、データを子コンポーネントに渡す方が良いという手法の紹介です。

### Subscribing to an external store

かつて useEffect の中で subscribe / unsubscribe していた処理は、 useSyncExternalStore を使って書けるようになったという紹介です。

### Fetching data

これまでの内容に従うと、ロジックはイベントハンドラーに引き渡すべきだと考えるかもしれませんが、たとえば query parameter を元にデータを取得するケースについては、page や query の内容でネットワークから情報を取得して表示し続けたいはずです。これが Effects です。

ただし、race condition と呼ばれるケースを意識する必要があります。
検索フィールドに hello と打ち込む場合に、 h / he / hel / hell / hello という情報が渡されます。ただし、それぞれの fetch のレスポンスが返ってくる順番は保証されていません。時には hello の結果の後に hell の結果が返ってきます。
このような場合に問題が起こらないように cleanup function を利用するのが望ましいです。

このようなパターンは、カスタム Hook として定義することもできます。

React Docs (BETA) ではこのパターンは　 useEffect の利用ケースだと紹介していますが、David の動画ではこのケースにおいても Goodbye, useEffect できると述べています。 (You don't need useEffect for fetching data.) useEffect -> renderAsYouFetch

#### Remix

```ts
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getItems } from "../storeApi";

export const loader = async () => {
  const items = await getItems();
  return json(items);
};

export default function Store() {
  const items = useLoaderData();
  // ...
}
```

#### Next.js

```ts
import { getItems } from "../storeApi";

function Store({ items }) {
  //
}

export async function getServerSideProps() {
  const items = await getItems();
  return { props: { items } };
}

export default Store;
```

#### React Query (Highly recommended)

```ts
import { useQuery, useQueryClient } from "react-query";

function Store() {
  const queryClient = useQueryClient();

  return (
    <button
      onClick={() => {
        queryClient.prefetchQuery("items", getItems);
      }}
    >
      See items
    </button>
  );
}

function Items() {
  const { data } = useQuery("items", getItems);
  //
}
```

## 参考

You Might Not Need an Effect
https://beta.reactjs.org/learn/you-might-not-need-an-effect

Goodbye, useEffect, David Khourshid @ ReactNext 22
https://www.youtube.com/watch?v=RW9TVhmxu6Q
