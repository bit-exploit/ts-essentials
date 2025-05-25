# Algoritmo de Palíndromo Optimizado con Múltiples Estrategias

**Un palíndromo es una palabra, frase o secuencia que se lee igual en ambas direcciones. Este algoritmo implementa tres enfoques diferentes:**

- **Comparación de Strings:** Versión básica usando métodos de array
- **Punteros:** Versión óptima en memoria (O(1) espacio adicional)
- **Stack:** Demostración con estructura de datos (fines educativos)

## Comparación de Rendimiento

| Enfoque     | Complejidad Temporal | Complejidad Espacial | Caso Ideal         |
| ----------- | -------------------- | -------------------- | ------------------ |
| Comparación | O(n)                 | O(n)                 | Código legible     |
| Punteros    | O(n)                 | O(1)                 | Strings muy largos |
| Stack       | O(n)                 | O(n/2)               | Aprendizaje        |

## Diagrama de Flujo (Versión Punteros)

```mermaid
flowchart TD
    A[Inicio] --> B["Limpiar string (remove espacios/símbolos)"]
    B --> C["Inicializar punteros (i=0, j=n-1)"]
    C --> D{"i < j?"}
    D -->|No| E["✅ Es palíndromo"]
    D -->|Sí| F{"str[i] == str[j]?"}
    F -->|No| G["❌ No es palíndromo"]
    F -->|Sí| H["i++, j--"]
    H --> D
```

---

🌟 **¿Te gustó este algoritmo?**
[Dame una estrella](https://github.com/bit-exploit/ts-essentials/stargazers)

🚀 **Siguiente paso:**
[Explorar más algoritmos →](/README.md)
