# Include once in http; replaces the production shared static-cache-map.inc.
# Only existing public static locations include static-cache-headers.inc.
map "$host:$uri" $static_asset_versioned {
    default 0;
    "~*:(?:/[^/]+)*/(?=[0-9a-f]*[a-f])[0-9a-f]{8,64}\\.(js|css)$" 1;
    "~*:[^?]*\\.(?=[0-9a-f]*[a-f])[0-9a-f]{8,64}\\.(js|css)$" 1;
    "~^(davidz\\.cn|licaibu\\.davidz\\.cn|sunlight\\.davidz\\.cn|vidat2\\.davidz\\.cn):/assets/[^/]+-[A-Za-z0-9_-]{8}\\.(js|css)$" 1;
    # Only www's newly imported images are known to use Vite content hashes.
    "~^davidz\\.cn:/assets/[^/]+-[A-Za-z0-9_-]{8}\\.(svg|png|jpe?g|webp|avif|gif|ico|woff2?)$" 1;
}

# URI remains available on 304; Content-Type does not.
map "$static_asset_versioned:$uri" $static_cache_candidate {
    default "no-cache";
    "~^1:" "public, max-age=31536000, immutable";
    "~*^0:.*\\.(js|css)$" "public, max-age=3600";
    "~*^0:.*\\.(avif|webp|jpe?g|png|gif|svg|ico|woff2?|ttf|otf|eot)$" "public, max-age=604800";
}

map "$status:$sent_http_content_type" $static_cache_policy {
    default "no-store";
    # Keep SPA fallbacks and JSON revalidating even for asset-like request URLs.
    "~^(200|206):(text/html|application/json)" "no-cache";
    "~^(200|206|304):" $static_cache_candidate;
}
