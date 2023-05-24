const REVALIDATE_EVERY_MINUTE = 60;

export default function Home({ lastUpdated }: { lastUpdated: string }) {
  return <><h1>Time should refresh roughly every {REVALIDATE_EVERY_MINUTE} seconds</h1>
  <time dateTime={lastUpdated}>{lastUpdated}</time>;
  </>
}

// Create static props
export async function getStaticProps() {
    return {
        props: { lastUpdated: new Date().toUTCString() },
        revalidate: REVALIDATE_EVERY_MINUTE,
    };
}
