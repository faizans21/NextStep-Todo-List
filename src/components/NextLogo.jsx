const NextLogo = () => {
    return (
        <svg
            width="180"
            height="50"
            viewBox="0 0 250 60"
            xmlns="http://www.w3.org/2000/svg"
            // The className 'text-blue-600 fill-current' is no longer directly controlling the fill
            // as we are setting it explicitly below. You might remove it if not used for other purposes.
            className="fill-current"
        >
            {/* The <defs> section for linearGradient is removed as we are using a solid color */}
            <g>
                {/* Arrow/Step Icon */}
                {/* Changed fill from 'url(#grad)' to the specific hex color */}
                <polygon points="10,30 30,10 30,22 50,22 50,38 30,38 30,50" fill="#212529" />
                {/* Text */}
                <text
                    x="60"
                    y="38"
                    fontFamily="Segoe UI, sans-serif"
                    fontSize="28"
                    // Changed fill from 'url(#grad)' to the specific hex color
                    fill="#212529"
                    fontWeight="bold"
                >
                    NextStep
                </text>
            </g>
        </svg>
    );
};

export default NextLogo;