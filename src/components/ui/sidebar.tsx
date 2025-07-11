import { optionsSidebar } from "../../lib/options-sidebar"
import { cn } from "../../lib/utils"
import { useSidebarStore } from "../../store/sidebar.store"

export default function Sidebar() {
  const { visible, setVisible } = useSidebarStore()

  return (
    <>
      {/* Fondo oscuro en móviles */}
      {visible && (
        <div
          onClick={setVisible}
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-gray-800 p-4 pt-4 text-white transition-all duration-300 md:static md:block",
          !visible && "md:w-16",
          visible ? "w-64" : "w-16"
        )}
      >
        <div className="mt-16" />  {/* Puedes ajustar este valor si quieres más o menos espacio */}

        <nav>
          <ul className="space-y-4">
            {optionsSidebar.map((option) => (
              <li key={option.label}>
                <a
                  href={option.href}
                  className={cn(
                    "flex items-center gap-2 rounded p-2 transition-colors hover:bg-gray-700",
                    !visible && "justify-center",
                    "text-white"
                  )}
                >
                  <span>{option.icon}</span>
                  {visible && <span>{option.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
