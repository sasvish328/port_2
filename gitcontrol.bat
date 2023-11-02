@echo off
setlocal

rem Добавьте пути к файлам и каталогам, которые вы хотите проиндексировать
set "file1=path\to\file1"
set "file2=path\to\file2"
set "dir1=path\to\directory1\*.txt"

rem Индексируем файлы и пути
git add "%file1%" "%file2%" "%dir1%"

rem Опционально, выполните другие команды git, если необходимо
rem !!!!!!! git commit закоментирован!!
rem git commit -m "Ваш комментарий к коммиту"

endlocal