interface GameSystemRequirementsProps {
    platforms: {
      platform: {
        id: number;
        name: string;
        slug: string;
      };
      requirements?: {
        minimum?: string;
        recommended?: string;
      };
    }[];
  }
  
  export default function GameSystemRequirements({ platforms }: GameSystemRequirementsProps) {
    const pcPlatforms = platforms.filter(
      (p) =>
        p.platform.slug === "pc" &&
        (p.requirements?.minimum || p.requirements?.recommended)
    );
  
    if (pcPlatforms.length === 0) return null;
  
    return (
      <div className="mt-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          System Requirements for PC
        </h3>
        {pcPlatforms.map((p) => (
          <div key={p.platform.id} className="bg-transparent">
            {p.requirements?.minimum && (
              <div className="mb-2">
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  <strong>Minimum:</strong> {p.requirements.minimum}
                </p>
              </div>
            )}
            {p.requirements?.recommended && (
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  <strong>Recommended:</strong> {p.requirements.recommended}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  