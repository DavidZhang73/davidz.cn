# Nginx >= 1.29.3; retain inherited security headers.
add_header_inherit merge;
add_header Cache-Control $static_cache_policy always;
