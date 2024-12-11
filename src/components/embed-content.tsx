import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface EmbedContentProps
{
    title: string
    description?: string
    type: 'image' | 'pdf'
    src: string
    alt?: string
}

export function EmbedContent({ title, description, type, src, alt }: EmbedContentProps)
{
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Card className="w-full mb-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                    <CardTitle>{title}</CardTitle>
                    {description && <CardDescription>{description}</CardDescription>}
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
            </CardHeader>
            <CardContent>
                {isExpanded && (
                    <div className="mt-2">
                        {type === 'image' ? (
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src={src}
                                    alt={alt || title}
                                    width={800}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        ) : (
                            <div className="aspect-[16/9] relative">
                                <iframe
                                    src={src}
                                    className="w-full h-full absolute top-0 left-0"
                                    style={{ border: 'none' }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                )}
                <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                        <a href={src} target="_blank" rel="noopener noreferrer">
                            Open {type === 'image' ? 'Image' : 'PDF'} <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
