"use client";

import { Smile } from "lucide-react";
import EmojiPicker from "emoji-picker-react";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

// Changed component name to ensure uniqueness
export const MessageEmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
      </PopoverTrigger>
      <PopoverContent 
        side="right" 
        sideOffset={40}
        className="bg-transparent border-none shadow-none drop-shadow-none mb-16 p-0"
      >
        <EmojiPicker
          width={300}
          height={350}
          // theme={resolvedTheme === "dark" ? "dark" : "light"}
          onEmojiClick={(emojiData) => onChange(emojiData.emoji)}
          lazyLoadEmojis={true}
          previewConfig={{ showPreview: false }}
        />
      </PopoverContent>
    </Popover>
  );
}