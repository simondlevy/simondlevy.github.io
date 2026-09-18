#!/usr/bin/env python3
'''
Big-O demonstration

Copyright (c) 2021 Simon D. Levy

MIT License
'''

import numpy as np
import matplotlib.pyplot as plt


def plot_linear(n, labels=(None, None, None)):

    plt.plot(n, label=labels[0])
    plt.plot(2*n, label=labels[1])
    plt.plot(3*n, label=labels[2])

def plot_logn(n, labels=(None, None, None)):

    plt.plot(np.log2(n), label=labels[0])
    plt.plot(2*np.log2(n), label=labels[1])
    plt.plot(3*np.log2(n), label=labels[2])


def plot_nlogn(n, labels=(None, None, None)):

    plt.plot(n*np.log2(n), label=labels[0])
    plt.plot(2*n*np.log2(n), label=labels[1])
    plt.plot(3*n*np.log2(n), label=labels[2])


def plot_quadratic(n, labels=(None, None, None)):

    plt.plot(n**2, label=labels[0])
    plt.plot(2*n**2, label=labels[1])
    plt.plot(3*n**2, label=labels[2])


def plot_cubic(n, labels=(None, None, None)):

    plt.plot(n**3, label=labels[0])
    plt.plot(2*n**3, label=labels[1])
    plt.plot(3*n**3, label=labels[2])


def plot_exponential(n, labels=(None, None, None)):

    plt.plot(2**n, label=labels[0])
    plt.plot(2*2**n, label=labels[1])
    plt.plot(3*2**n, label=labels[2])


def main():

    n = np.arange(1, 1000)

    logn_labels = '$logn$', '$2logn$', '$3logn$'
    linear_labels = '$n$', '$2n$', '$3n$'
    nlogn_labels = '$nlogn$', '$2nlogn$', '$3nlogn$'
    quadratic_labels = '$n^2$', '$2n^2$', '$3n^2$'
    cubic_labels = '$n^3$', '$2n^3$', '$3n^3$'
    exponential_labels = '$2^n$', '$2*2^n$', '$3*2^n$'

    plot_logn(n, labels=logn_labels)
    plt.legend()
    plt.show()

    plot_logn(n, labels=logn_labels)
    plot_linear(n, labels=linear_labels)
    plt.legend()
    plt.show()

    plot_logn(n)
    plot_linear(n, labels=linear_labels)
    plot_nlogn(n, labels=nlogn_labels)
    plt.legend()
    plt.show()

    plot_logn(n)
    plot_linear(n)
    plot_nlogn(n, labels=nlogn_labels)
    plot_quadratic(n, labels=quadratic_labels)
    plt.legend()
    plt.show()

    plot_logn(n)
    plot_linear(n)
    plot_nlogn(n)
    plot_quadratic(n, labels=quadratic_labels)
    plot_cubic(n, labels=cubic_labels)
    plt.legend()
    plt.show()

    plot_logn(n)
    plot_linear(n)
    plot_nlogn(n)
    plot_quadratic(n)
    plot_cubic(n, labels=cubic_labels)
    plot_exponential(n, labels=exponential_labels)
    plt.xlim([0,60])
    plt.ylim([0,1e19])
    plt.legend()
    plt.show()


main()
