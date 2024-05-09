import Link from "next/link";

const Watermark = () => {
  return (
    <div>
        <p className="text-white">Developed by&nbsp;
        <Link className="hover:underline underline-offset-4"
          href={'https://abhijayrajvansh.com/'} target="_blank" rel="noopener noreferrer">Abhijay Rajvansh.</Link>
        </p>
    </div>
  )
}

export default Watermark;