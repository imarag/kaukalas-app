export default function Title({ text}) {
    return (
        <h1 className="text-secondary text-4xl md:text-5xl lg:text-6xl font-bold text-center pt-5 pb-2">
            { text }
        </h1>
    )
}