import Link from "next/link";

export default function Chip(props) {
    const { title, link } = props

    return (
        <Link
            className={`border rounded-full px-4 py-1`}
            href={link}
        >
            {title}
        </Link>
    )
}
