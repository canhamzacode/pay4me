import { formatDate } from "@/lib/utils";
import React from 'react';

interface DateComponentProps extends React.HTMLAttributes<HTMLTimeElement> {
    dateString: string;
}

function DateComponent({ dateString, ...props }: DateComponentProps) {
    try {
        const formattedDate = formatDate(dateString, { year: 'numeric', month: 'long', day: 'numeric' });
        return <time dateTime={dateString} {...props}>{formattedDate}</time>;
    } catch (error) {
        console.error(error);
        return <time dateTime={dateString} {...props}>Invalid Date</time>;
    }
}

export default DateComponent;