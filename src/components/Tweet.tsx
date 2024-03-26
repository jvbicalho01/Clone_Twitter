interface TweetProps {
  user: string;
  children: string;
  likes?: number;
}

export function Tweet(props: TweetProps) {

  return (

    <div className="tweet" style={{ borderRadius: "8px" }}>
      <h2>{props.user}</h2>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>

  )
}