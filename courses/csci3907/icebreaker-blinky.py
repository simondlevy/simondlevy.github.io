from amaranth import Elaboratable, Signal, Module
from amaranth_boards.icebreaker import ICEBreakerPlatform


class Blinker(Elaboratable):

    def __init__(self):

        self.count = Signal(24)

    def elaborate(self, platform):

        m = Module()

        # Get the onboard green LED resource
        led = platform.request("led_g", 0)

        # Increment counter on every clock cycle
        m.d.sync += self.count.eq(self.count + 1)

        # Drive the LED using the most significant bit of the counter
        m.d.comb += led.o.eq(self.count[-1])

        return m


if __name__ == "__main__":

    # Initialize the iCEBreaker platform definition
    platform = ICEBreakerPlatform()

    # Build and flash the design to the board automatically
    platform.build(Blinker(), do_program=True)
