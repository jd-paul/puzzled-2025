export default function CssGridBackground() {
    return (
        <>
            <div
                className="absolute inset-0 pointer-events-none z-[-1]"
                style={{
                    backgroundColor: "#FEF5D0",
                    backgroundImage: `
                        linear-gradient(rgba(189,183,162,.25) 1px, transparent 1px),
                        linear-gradient(to right, rgba(189,183,162,.25) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                }}
            />

        </>
    )
}
