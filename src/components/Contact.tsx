"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getCalApi } from "@calcom/embed-react"
import { motion } from "framer-motion"
import { Calendar, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
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
        <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-950">
            <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 relative"
                >
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t border-l border-gray-300 dark:border-gray-700 opacity-60" />

                    <div className="flex items-center gap-3 mb-3">
                        <MessageSquare className="size-5 text-gray-700 dark:text-gray-300" />
                        <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Get in Touch
                        </h2>
                    </div>

                    <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
                        Reach out for collaboration opportunities or to discuss how we can work together.
                    </p>

                    <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b border-r border-gray-300 dark:border-gray-700 opacity-60" />
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-2 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md">
                            <div className="relative h-[400px] w-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    title="map"
                                    className="absolute inset-0"
                                    frameBorder={0}
                                    marginHeight={0}
                                    marginWidth={0}
                                    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7385.3610915490835!2d84.8966196!3d22.2521963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1733789669485!5m2!1sen!2sin"
                                    allowFullScreen
                                />
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="border border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm shadow-md h-full">
                            <div className="p-6 md:p-8 space-y-6 h-full flex flex-col">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-serif italic font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                                    <p className="text-sm text-muted-foreground font-mono">Reach out through any of these channels</p>
                                </div>

                                <div className="space-y-5 flex-grow">
                                    <motion.div
                                        className="flex items-start space-x-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                    >
                                        <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                            <a href="mailto:games.princeraj@gmail.com" className="text-sm text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors">
                                                games.princeraj@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start space-x-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                    >
                                        <Phone className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                                            <a href="tel:800-326-6242" className="text-sm text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-colors">
                                                800-326-6242
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-start space-x-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                    >
                                        <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                                            <p className="text-sm text-muted-foreground">
                                                National Institute of Technology, Rourkela, Odisha, IN 769008
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <h3 className="text-xl font-serif italic font-semibold mb-4 text-gray-900 dark:text-white">Schedule a Call</h3>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 font-mono"
                                            data-cal-namespace="30min"
                                            data-cal-link="starkprince/30min"
                                            data-cal-config='{"layout":"month_view"}'
                                        >
                                            <Calendar className="mr-2 h-4 w-4" />
                                            Schedule a 30-minute call
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
