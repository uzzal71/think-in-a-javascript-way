while (shouldIRun()) {
  doSomeThingAmazing();
}

/**
 * shouldIRun() how to working...
 * @ setTimeout, setInterval etc.
 * @ OS Tasks? (HTTP server)
 * @ Own Tasks? (Filesystem)
 */

/**
 * doSomeThingAmazing() how to working...
 * Pending timers done? - run callback
 * Pending OS/own task done? - run callback
 * Resume the event loop
 */
