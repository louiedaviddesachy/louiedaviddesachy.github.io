import type { Plugin } from 'vite'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

/**
 * Plugin Vite pour gérer les imports figma:asset
 * Transforme les imports figma:asset en imports de fichiers normaux
 */
export function figmaAssetsPlugin(): Plugin {
  return {
    name: 'vite-plugin-figma-assets',
    enforce: 'pre',

    resolveId(id: string) {
      // Intercepter les imports figma:asset
      if (id.startsWith('figma:asset/')) {
        const assetPath = id.replace('figma:asset/', '')
        const fullPath = join(process.cwd(), 'src/imports/assets', assetPath)

        // Vérifier si le fichier existe
        if (existsSync(fullPath)) {
          return fullPath
        }

        // Retourner un chemin virtuel si le fichier n'existe pas
        return '\0' + id
      }
    },

    load(id: string) {
      // Pour les assets qui n'existent pas, retourner une image placeholder
      if (id.startsWith('\0figma:asset/')) {
        // Retourner une data URL pour une image placeholder
        return 'export default "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\'%3E%3Crect fill=\'%23242943\' width=\'400\' height=\'400\'/%3E%3Ctext fill=\'%23f76f91\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dy=\'.3em\'%3EImage%3C/text%3E%3C/svg%3E"'
      }
    }
  }
}
