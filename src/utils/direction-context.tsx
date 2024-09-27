import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the context shape
interface DirectionContextType {
    direction: "ltr" | "rtl";
    setDirection: (dir: "ltr" | "rtl") => void;
}

// Create the context with a default value
export const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

// Helper function to detect language direction based on lang attribute
const detectLangDirection = (lang: string) => {
    const rtlLangs = ["ar", "he", "fa", "ur", "syr", "yi", "ps", "prs", "dv", "az_IR", "az-IR", "ckb", "ckb-IR", "ckb-IQ", "ckb_IR", "ckb_IQ"];
    return rtlLangs.some((rtlLang) => lang.startsWith(rtlLang)) ? "rtl" : "ltr";
};

// Create a provider component
export const DirectionProvider = ({ children }: { children: ReactNode }) => {
    const [direction, setDirection] = useState<"ltr" | "rtl">(() => {
        // Get the dir attribute from <html>
        const htmlDir = document.documentElement.getAttribute("dir");

        if (htmlDir === "ltr" || htmlDir === "rtl") {
            // Return the existing dir attribute if available
            return htmlDir as "ltr" | "rtl";
        } else {
            // If dir is not present, use lang attribute to detect direction
            const lang = document.documentElement.getAttribute("lang") || "en"; // Default to "en" if no lang is set
            return detectLangDirection(lang);
        }
    });

    useEffect(() => {
        // Update the dir attribute on the <html> element whenever direction changes
        document.documentElement.setAttribute("dir", direction);
        localStorage.setItem("pageDirection", direction); // Optional: Save to localStorage
    }, [direction]);

    return (
        <DirectionContext.Provider value={{ direction, setDirection }}>
            {children}
        </DirectionContext.Provider>
    );
};
