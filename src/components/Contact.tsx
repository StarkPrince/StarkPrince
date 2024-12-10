"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getCalApi } from "@calcom/embed-react"
import { Calendar, Mail, MapPin, Phone } from 'lucide-react'
import { useEffect } from "react"

export function Contact()
{
    useEffect(() =>
    {
        (async function ()
        {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <section id="contact" className="container py-12">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Get in Touch</h2>
            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="overflow-hidden">
                    <div className="relative h-[400px] w-full">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7385.3610915490835!2d84.8966196!3d22.2521963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1733789669485!5m2!1sen!2sin"
                            allowFullScreen
                        />
                    </div>
                </Card>
                <Card>
                    <div className="p-6 space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">Contact Information</h3>
                            <p className="text-sm text-muted-foreground">Reach out through any of these channels</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm">games.princeraj@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm">800-326-6242</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm">National Institute of Technology, Rourkela, Odisha, IN 769008</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
                            <Button
                                className="w-full"
                                data-cal-namespace="30min"
                                data-cal-link="starkprince/30min"
                                data-cal-config='{"layout":"month_view"}'
                            >
                                <Calendar className="mr-2 h-4 w-4" />
                                Schedule a 30-minute call
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}

