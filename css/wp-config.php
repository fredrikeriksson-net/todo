<?php
/**
 * Baskonfiguration för WordPress.
 *
 * Denna fil används av wp-config.php-genereringsskript under installationen.
 * Du behöver inte använda webbplatsen, du kan kopiera denna fil direkt till
 * "wp-config.php" och fylla i värdena.
 *
 * Denna fil innehåller följande konfigurationer:
 *
 * * Inställningar för MySQL
 * * Säkerhetsnycklar
 * * Tabellprefix för databas
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL-inställningar - MySQL-uppgifter får du från ditt webbhotell ** //
/** Namnet på databasen du vill använda för WordPress */
define('DB_NAME', 'fredrikeriksson_net_bleckan');

/** MySQL-databasens användarnamn */
define('DB_USER', 'fredrikeriksson_net_bleckan');

/** MySQL-databasens lösenord */
define('DB_PASSWORD', 'ForzaBajen12!');

/** MySQL-server */
define('DB_HOST', 'fredrikeriksson.net.mysql');

/** Teckenkodning för tabellerna i databasen. */
define('DB_CHARSET', 'utf8mb4');

/** Kollationeringstyp för databasen. Ändra inte om du är osäker. */
define('DB_COLLATE', '');

/**#@+
 * Unika autentiseringsnycklar och salter.
 *
 * Ändra dessa till unika fraser!
 * Du kan generera nycklar med {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Du kan när som helst ändra dessa nycklar för att göra aktiva cookies obrukbara, vilket tvingar alla användare att logga in på nytt.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'C Q`3j.<  C#Owb;@L#&^|-dK024*dot@YWuM(}%gxF*4G>{`7<c5E20<jQoLT%Q');
define('SECURE_AUTH_KEY',  '8I<XQ-Q7&]) wZ Wg6<)yfg5J/a~klCTfvdgjEP^mAEsT|6`QKiPDIqd%$c mXdu');
define('LOGGED_IN_KEY',    'DbJ_$A4%})Pe)mz9mf:8(h<DaQxKi(U{OK,h@X5sJn4f^%Xf*$W0|$1!j9{aCZeF');
define('NONCE_KEY',        ']B~zOc$6nxT%E9chvKPI!Z}W`Q7G[rsD}5zCAq-DJF+=/]qS+dU!y%~*n&zGg[o7');
define('AUTH_SALT',        '`fPEs;cx}rsd]EzX0cP?XB~>~6sGb2(H%{^Qnb&YIa]o-1JG.(E wZprVuhM$cYw');
define('SECURE_AUTH_SALT', ':9TmY`35>:HJT#.o$ufGFS9B^g]i2G%b6mw|J!zFr1R=%@mm$vz_]K6Z_39d@IRz');
define('LOGGED_IN_SALT',   '[pjR<S^DT|eV]WVvi=Kge:M}3bQN5gKy54B9rjANw)p<v}T!`<<m4~! (/t[E5Vy');
define('NONCE_SALT',       '*LZ?q3Jw-da`Nml*kQ%IqvCq,y(1=v8$3m>0zsqBW^* kw^:y0;7&,}T,rJ<<Xkm');

/**#@-*/

/**
 * Tabellprefix för WordPress Databasen.
 *
 * Du kan ha flera installationer i samma databas om du ger varje installation ett unikt
 * prefix. Endast siffror, bokstäver och understreck!
 */
$table_prefix  = 'wp_';

/** 
 * För utvecklare: WordPress felsökningsläge. 
 * 
 * Ändra detta till true för att aktivera meddelanden under utveckling. 
 * Det är rekommderat att man som tilläggsskapare och temaskapare använder WP_DEBUG 
 * i sin utvecklingsmiljö. 
 *
 * För information om andra konstanter som kan användas för felsökning, 
 * se dokumentationen. 
 * 
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */ 
define('WP_DEBUG', false);

/* Det var allt, sluta redigera här! Blogga på. */

/** Absoluta sökväg till WordPress-katalogen. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Anger WordPress-värden och inkluderade filer. */
require_once(ABSPATH . 'wp-settings.php');