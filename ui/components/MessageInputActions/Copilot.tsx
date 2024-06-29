import { cn } from '@/lib/utils';
import { Switch } from '@headlessui/react';

const CopilotToggle = ({
  copilotEnabled,
  setCopilotEnabled,
}: {
  copilotEnabled: boolean;
  setCopilotEnabled: (enabled: boolean) => void;
}) => {
  return (
    <div className="group flex flex-row items-center space-x-1 active:scale-95 duration-200 transition cursor-pointer">
      <p
        onClick={() => setCopilotEnabled(!copilotEnabled)}
        className={cn(
          'text-xs font-medium transition-colors duration-150 ease-in-out',
          copilotEnabled
            ? 'text-[#24A0ED]'
            : 'text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white',
        )}
      >
      </p>
    </div>
  );
};

export default CopilotToggle;
