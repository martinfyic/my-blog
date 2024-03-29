interface IframeProps {
  videoId: string;
  title: string;
}

export const Iframe = ({ videoId, title }: IframeProps) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <iframe
        width='100%'
        height='400'
        src={`https://www.youtube.com/embed/${videoId}`}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
};
