'use client'
import { HeadingSection } from '@/components/heading-section'
import { Tech } from './tech'

import { Technology } from '@/types/projects'
import { motion } from 'framer-motion'

type KnownTechProps = {
  techs: Technology[]
}

export function KnownTechs({ techs }: KnownTechProps) {
  return (
    <section className="container w-full bg-gray-900 py-16">
      <HeadingSection title="Conhecimentos" subtitle="Competências" />

      <div className="mt-[60px] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <Tech key={index} tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
