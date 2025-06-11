// components/CustomButton.jsx
import { withFrameShine } from "../utils/withFrameShine";

const Button = ({ className, children }) => (
  <button className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white ${className}`}>
    {children}
  </button>
);

export const ShinyButton = withFrameShine(Button);

// Usage in your portfolio:
