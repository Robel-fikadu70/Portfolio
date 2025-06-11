import { useEffect } from "react"
import { ComponentType } from "react"

export function withFrameShine(Component) {
    return function WithFrameShineWrapper(props) {
        useEffect(() => {
            const style = document.createElement("style")
            style.innerHTML = `
              @keyframes maskShine {
                0% { -webkit-mask-position: 200%; }
                100% { -webkit-mask-position: -100%; }
              }
              .maskShine {
                -webkit-mask-image: linear-gradient(to right, transparent 30%, #EEE 50%, transparent 70%);
                -webkit-mask-size: 150% auto;
                animation: maskShine 5s ease-in-out infinite;
              }
            `
            document.head.appendChild(style)
            
            return () => {
                document.head.removeChild(style)
            }
        }, [])

        const { className, ...rest } = props
        const combinedClassName = [className, "maskShine"]
            .filter(Boolean)
            .join(" ")

        return <Component {...rest} className={combinedClassName} />
    }
}