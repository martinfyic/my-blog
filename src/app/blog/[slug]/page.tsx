interface Props {
  params: {
    slug: string;
  };
}
export default function BlogPage({ params }: Props) {
  const { slug } = params;
  return (
    <div>
      <h1>Hello Page {slug}</h1>
    </div>
  );
}
