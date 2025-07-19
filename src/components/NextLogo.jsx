
const NextLogo = () => {
    return (
        <svg
            width="180"
            height="50"
            viewBox="0 0 250 60"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-600 fill-current"
        >
            <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00b4db" />
                    <stop offset="100%" stopColor="#0083b0" />
                </linearGradient>
            </defs>
            <g>
                {/* Arrow/Step Icon */}
                <polygon points="10,30 30,10 30,22 50,22 50,38 30,38 30,50" fill="url(#grad)" />
                {/* Text */}
                <text
                    x="60"
                    y="38"
                    fontFamily="Segoe UI, sans-serif"
                    fontSize="28"
                    fill="url(#grad)"
                    fontWeight="bold"
                >
                    NextStep
                </text>
            </g>
        </svg>
    );
};

export default NextLogo;
