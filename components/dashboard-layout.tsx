"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { FirebaseProvider } from "@/components/firebase-provider"
import { ProtectedRoute } from "@/components/protected-route"
import { EventCategoriesProvider } from "@/components/event-categories-provider"
import { PartnersProvider } from "@/components/partners-provider"
import { TrainersProvider } from "./trainers-provider"
import { EventsProvider } from "./events-provider"

/**
 * Komponen DashboardLayout
 *
 * Layout utama untuk halaman dashboard
 * Menyediakan sidebar dan provider yang diperlukan untuk seluruh aplikasi
 */
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Hindari rendering di server untuk mencegah ketidakcocokan hydration
  if (!isMounted) {
    return null
  }

  return (
    <ProtectedRoute>
      <FirebaseProvider>
        <PartnersProvider>
          <TrainersProvider>
            <EventsProvider>
              <EventCategoriesProvider>
                <div className="flex h-screen overflow-hidden bg-background/50">
                  <Sidebar />
                  <div className="flex flex-col flex-1 overflow-hidden">
                    <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                      <div className="mx-auto max-w-7xl">{children}</div>
                    </main>
                  </div>
                </div>
              </EventCategoriesProvider>
            </EventsProvider>
          </TrainersProvider>
        </PartnersProvider>
      </FirebaseProvider>
    </ProtectedRoute>
  )
}

