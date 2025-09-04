"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion"

interface HoverImage {
    src: string
    alt: string
}

const textPhrases = [
    "Artificial Intelligence Revolution",
    "Machine Learning Algorithms",
    "Deep Neural Networks",
    "Computer Vision Systems",
    "Natural Language Processing",
    "Robotics & Automation",
    "Data Science Analytics",
    "Blockchain Technology",
    "Virtual Reality Worlds",
    "Augmented Reality Experience",
    "Internet of Things",
    "Cloud Computing Infrastructure",
    "Cybersecurity Protocols",
    "Quantum Cryptography",
    "Edge Computing Networks",
]

const randomPhrases = [
    "Digital Transformation",
    "Innovation Ecosystem",
    "Smart City Solutions",
    "Sustainable Technology",
    "Future of Work",
    "Creative Coding",
    "Tech Disruption",
    "Digital Renaissance",
    "Connected Universe",
    "Infinite Possibilities",
    "Next Generation",
    "Revolutionary Ideas",
    "Breakthrough Moments",
    "Visionary Concepts",
    "Tomorrow's Reality",
]

const uploadedImages: HoverImage[] = [
    { src: "/images/neural-network.jpg", alt: "Neural Network" },
    { src: "/images/abstract-flow.jpg", alt: "Abstract Flow" },
    { src: "/images/robot-arm.jpg", alt: "Robot Arm" },
    { src: "/images/ai-human.jpg", alt: "AI Human" },
    { src: "/images/ai-question.jpg", alt: "AI Question" },
    { src: "/placeholder-logo.png", alt: "Logo" },
    { src: "/placeholder-user.jpg", alt: "User" },
    { src: "/placeholder.jpg", alt: "Placeholder" },
]

const phraseImages: { [key: string]: HoverImage } = {}
textPhrases.forEach((phrase, index) => {
    phraseImages[phrase] = uploadedImages[index % uploadedImages.length]
})

randomPhrases.forEach((phrase, index) => {
    phraseImages[phrase] = uploadedImages[index % uploadedImages.length]
})

export function MarqueeAnimation() {
    const [scrollY, setScrollY] = useState(0)
    const [hoveredPhrase, setHoveredPhrase] = useState<string | null>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const tilt = useSpring(0, { stiffness: 400, damping: 30 })
    const imageX = useSpring(0, { stiffness: 400, damping: 30 })
    const imageY = useSpring(0, { stiffness: 400, damping: 30 })
    const lastMouseX = useRef(0)
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const [firstMarqueePhrases, setFirstMarqueePhrases] = useState<string[]>([])
    const [secondMarqueePhrases, setSecondMarqueePhrases] = useState<string[]>([])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - lastMouseX.current
            lastMouseX.current = e.clientX

            const imageSize = 256 // 64 * 4 = 256px (w-64 h-64)
            const padding = 20
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight

            // Calculate bounded positions to keep image fully visible
            const boundedX = Math.max(imageSize / 2 + padding, Math.min(viewportWidth - imageSize / 2 - padding, e.clientX))
            const boundedY = Math.max(imageSize / 2 + padding, Math.min(viewportHeight - imageSize / 2 - padding, e.clientY))

            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            imageX.set(boundedX)
            imageY.set(boundedY)

            // Calculate tilt based on mouse movement direction
            const tiltValue = Math.max(-8, Math.min(8, deltaX * 0.5))
            tilt.set(tiltValue)
        }

        window.addEventListener("scroll", handleScroll)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [mouseX, mouseY, imageX, imageY, tilt])

    useEffect(() => {
        const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5)

        setFirstMarqueePhrases(shuffleArray(textPhrases).slice(0, 10))
        setSecondMarqueePhrases(shuffleArray(randomPhrases).slice(0, 10))

        const interval = setInterval(() => {
            setFirstMarqueePhrases(shuffleArray(textPhrases).slice(0, 10))
            setSecondMarqueePhrases(shuffleArray(randomPhrases).slice(0, 10))
        }, 15000)

        return () => clearInterval(interval)
    }, [])

    const handlePhraseHover = (phrase: string) => {
        console.log("[v0] Hovering over phrase:", phrase)
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
            hoverTimeoutRef.current = null
        }
        setHoveredPhrase(phrase)
    }

    const handlePhraseLeave = () => {
        console.log("[v0] Left phrase hover")
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredPhrase(null)
            tilt.set(0)
        }, 100)
    }

    const getCurrentImage = () => {
        if (hoveredPhrase && phraseImages[hoveredPhrase]) {
            return phraseImages[hoveredPhrase]
        }
        return null
    }

    const currentImage = getCurrentImage()

    const createVariedText = (phrases: string[], count = 8) => {
        const repeatedPhrases = []
        // Create enough content to fill the screen twice for seamless looping
        for (let i = 0; i < count * 2; i++) { // Double the count
            phrases.forEach((phrase, index) => {
                repeatedPhrases.push(
                    <span key={`${i}-${index}`} className="inline-block">
                        <span
                            className="cursor-pointer hover:opacity-80 transition-opacity duration-200 text-black"
                            onMouseEnter={() => handlePhraseHover(phrase)}
                            onMouseLeave={handlePhraseLeave}
                        >
                            {phrase}
                        </span>
                        <span className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 text-black">•</span>
                    </span>,
                )
            })
        }
        return repeatedPhrases
    }


    return (
        <div className="relative overflow-hidden flex flex-col justify-center h-full">
            <div className="relative flex items-center overflow-hidden text-black">
                <motion.div
                    className="flex whitespace-nowrap will-change-transform"
                    animate={{
                        x: ["0%", "-100%"], // Changed from [0, "-50%"] to [0%, "-100%"]
                    }}
                    transition={{
                        duration: 3600,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {/* Double the content for seamless looping */}
                    <div className="flex whitespace-nowrap text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white select-none">
                        {createVariedText(firstMarqueePhrases, 6)}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence mode="wait">
                {currentImage && hoveredPhrase && (
                    <motion.div
                        className="fixed pointer-events-none z-[9999]"
                        style={{
                            left: imageX,
                            top: imageY,
                            x: "-50%",
                            y: "-50%",
                            rotateZ: tilt,
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            duration: 0.15,
                            ease: "easeOut",
                        }}
                    >
                        <img
                            src={currentImage.src || "/placeholder.svg"}
                            alt={currentImage.alt}
                            className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 min-w-32 min-h-32 sm:min-w-48 sm:min-h-48 md:min-w-56 md:min-h-56 lg:min-w-64 lg:min-h-64 max-w-32 max-h-32 sm:max-w-48 sm:max-h-48 md:max-w-56 md:max-h-56 lg:max-w-64 lg:max-h-64 rounded-xl shadow-2xl object-cover border-2 sm:border-3 md:border-4 border-white"
                            onLoad={() => console.log("[v0] Image loaded:", currentImage.alt)}
                            draggable={false}
                            style={{ userSelect: "none" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
