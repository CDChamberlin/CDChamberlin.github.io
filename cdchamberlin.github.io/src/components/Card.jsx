import Image from "next/image";
export default function Card({
    image,
    imageAlt,
    title,
    subtitle,
    description,
    year,
}) {
    return (
        <div className="flex flex-col items-center gap-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row md:max-w-4xl">
            <Image
                src={image}
                alt={imageAlt}
                width={384}
                height={384}
                className="object-cover w-full max-w-xs rounded-t-lg md:rounded-none md:rounded-l-lg md:w-1/3 lg:w-1/4"
            />
            <section className="flex flex-col justify-between p-4 leading-normal text-center md:text-left flex-1">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
                    {title}
                </h5>
                <h6 className="mb-2 text-xl">{year}</h6>
                <p className="font-medium">{subtitle}</p>
                <p className="text-gray-700 dark:text-gray-300">
                    {description}
                </p>
            </section>
        </div>
    );
}
