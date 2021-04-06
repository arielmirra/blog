# Cómo actualizar Angular-CLI de forma rápida y eficiente

![El logo de Angular](https://miro.medium.com/max/990/1*Oc2PsJ-QKOUG2I8J3HNmWQ.png)

## Siempre lo mismo
Para muchos desarrolladores (me incluyo) actualizar Angular no es tan fácil como poner un comando en la terminal y chau. Me llegan avisos de que mi versión diverge con otras, me encuentro leyendo sobre las mejoras de la última versión y cuando me decido a actualizar mi cabeza está en blanco... ¿Se romperá algo? ¿Qué comandos tengo que correr? Si también te pasa algo así, acá dejé explicado mi experiencia para que a vos también te sirva:

Primero que nada, chequeamos nuestra versión del cli (Command Line Interface) haciendo:

```bash
ng --version # para angular-cli v7 o menos
ng version  # para angular-cli v8+
```

Si queremos actualizar debemos primero desinstalar la actual versión de angular-cli del sistema:

```bash
sudo npm uninstall -g angular-cli  # Mac o Linux
npm uninstall -g angular-cli # Windows (requiere Powershell en modo administrador)
```

Por si las moscas, siempre verifico el caché a ver si no le erré:

```bash
sudo npm cache verify
sudo npm cache clean   # opcional para gente con TOC como yo
```

Y por fin llegó el momento más esperado, darle darle una buena bienvenida a todas esas nuevas features y fixes:

```bash
sudo npm install -g @angular/cli@latest
```

La flag ***-g*** significa ‘global’, hace que esté disponible en cualquier parte del sistema.

Obviamente que vamos a volver a chequear la versión para asegurarnos:

```cmd
▶ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 10.0.0
Node: 14.12.0
OS: linux x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1000.0
@angular-devkit/core         10.0.0
@angular-devkit/schematics   10.0.0
@schematics/angular          10.0.0
@schematics/update           0.1000.0
rxjs                         6.5.5
```

## Colorín colorado
Hasta acá todo anduvo bien? Perfecto, ya podes cerrar esto y seguir con tu vida. Suerte!

## Esto no ha terminado
**¿Tuviste problemas?** No importa, vamos por los más comunes a ver si lo solucionamos.

Si a la hora de instalar **se colgó infinitamente la instalación**:
- Probá si tu conexión es decente
- Puede ser problema de proxy, corré lo siguiente:

```bash
npm config rm proxy
npm config rm https-proxy
```

Esto vuelve la configuración de proxy a default y de repente todo funciona y compila y somos felices.

## Listo para mí, ahora seguís vos
Espero que te haya servido para aprender algo nuevo, ahora te toca seguir aprendiendo y profundizando. Gracias por estar acá y pensás que le puede servir a alguien que conocés o al equipo, compartilo.

Un saludo, [Ariel Mirra](https://linktr.ee/arielmirra).

[instagram](https://instagram.com/arielmirra) | [linkedin](https://linkedin.com/in/ariel-mirra) | [otros proyectos](https://linktr.ee/arielmirra)
